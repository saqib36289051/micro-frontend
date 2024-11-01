import React, { useEffect } from 'react'
import { post, get } from 'redux_store/sagas'
import { Label } from '../../components/ui/label';
import { Button } from '../../components/ui/button';
import { Textarea } from '../../components/ui/textarea';
import toast from 'react-hot-toast';

type GrievenceDesk = {
    name: string;
    takeCustomValue: boolean;
    id: string;
}

const AddGrievence = () => {
    const [data, setData] = React.useState<GrievenceDesk[]>([])
    const [checked, setChecked] = React.useState<string[]>([])
    const [showOtherInput, setShowOtherInput] = React.useState(false)
    const [otherValue, setOtherValue] = React.useState('')

    useEffect(() => {
        fetchInitialData()
    }, [])

    async function fetchInitialData() {
        toast.loading("loading...")
        await get('/GrievanceType').then((response) => {
            setData(response)
            toast.dismiss()
        })
    }

    function handleOtherInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setOtherValue(e.target.value)
    }

    function handleCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        const name = e.target.name;

        console.log("🚀 ~ handleCheckboxChange ~ e:", name, value)


        if (checked.includes(value)) {
            setChecked(checked.filter((item) => item !== value));
            name === "Other (Please Specify)" && setShowOtherInput(false);
            if (name === "Other (Please Specify)") setOtherValue("");
        } else {
            setChecked([...checked, value]);
            name === "Other (Please Specify)" && setShowOtherInput(true);
        }
    }

    async function onSubmit() {
        const getItemsObj = data?.filter((item) => checked.includes(item.id.toString()))
            ?.map((item) => {
                if (item.name === "Other (Please Specify)") {
                    return { ...item, name: otherValue };
                }
                return item;
            });

        toast.loading("Submitting...")

        await post("/Grievance", {
            types: getItemsObj.map((item) => ({
                typeId: item.id,
                value: item.name,
            }))
        }).then(() => {
            toast.dismiss()
            toast.success("Submitted successfully")
        }).catch((error) => {
            toast.error(error)
        })
    }

    return (
        <>
            {
                data?.length > 0 &&
                <div className='p-4 m-2 rounded-lg bg-white shadow space-y-4 '>
                    {
                        data?.map((item, index) => {
                            return (
                                <div key={index} className='flex space-x-3'>
                                    <input type='checkbox' key={index} id={item.id} name={item.name} value={item.id} onChange={handleCheckboxChange} checked={checked.includes(item.id.toString())} />
                                    <Label htmlFor={item.id}>{item.name}</Label>
                                </div>
                            )
                        })
                    }

                    {showOtherInput ? (
                        <Textarea
                            className=""
                            placeholder="Please specify"
                            value={otherValue}
                            onChange={handleOtherInputChange}
                        ></Textarea>
                    ) : (
                        ""
                    )}

                    <Button onClick={onSubmit} className="btn btn-success mt-3">
                        Submit
                    </Button>
                </div>
            }
        </>

    )
}

export default AddGrievence
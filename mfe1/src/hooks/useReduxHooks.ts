// src/hooks/useAppHooks.ts
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { AppDispatch, RootState } from "main_container/store";

// Create a type-safe version of useDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Create a type-safe version of useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

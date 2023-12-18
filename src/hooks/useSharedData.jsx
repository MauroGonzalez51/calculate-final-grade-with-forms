import { SharedData } from "@context/SharedDataContext";
import { useContext } from "react";

export const useSharedData = () => useContext(SharedData);

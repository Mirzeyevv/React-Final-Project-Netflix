import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const themeStore = create(
    persist(
        set => (
            {
                accesToken: "",
                refreshToken: "",
                addAccesToken: (token) => set((prevState) => ({...prevState,accesToken: token})),
                addRefreshToken: (token) => set((prevState) => ({...prevState,refreshToken: token})),
            }
        )
    )

)
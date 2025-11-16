interface ProjectTypes {
    children: React.ReactNode;
}

function Porject({ children }: ProjectTypes) {
    return (
        <main className="flex justify-center h-full w-full gap-[50px]">
            {children}
        </main>
    )
}

export default Porject
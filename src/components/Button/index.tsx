interface ButtonTypes {
    label: string;
}

function Button({ label }: ButtonTypes) {
    return (
        <div className="flex justify-center flex-col items-center">
            <h1
                className="text-7xl m-2">Button</h1>
            <button
                onClick={() => window.alert(`A label desse botão é "${label}"`)}
                className='text-4xl m-2 bg-gray-300 rounded-[60px] p-3'>{label}</button>
        </div>
    )
}

export default Button
interface ColorParagraphTypes {
    color: string;
    text: string;
}

function ColorParagraph({ color, text }: ColorParagraphTypes) {
    return (
        <div className="flex justify-center flex-col items-center">
            <h1
                className="text-7xl m-2"
            >Parágrafo colorido</h1>
            <p style={{color:color}}
                className={`text-4xl m-2 rounded-[60px] p-3`}
            >{text.toUpperCase()}</p>
        </div>
    )
}

export default ColorParagraph
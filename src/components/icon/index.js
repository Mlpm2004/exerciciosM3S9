export  const Icon = ({iconType, altText }) => {
  // Adicione uma lógica para pegar um svg de acordo com algum tipo informado
    return (
        <>
          <span data-testid="src-data">{iconType}</span>
          <img src={iconType} alt={altText} />
        </>
    )
};


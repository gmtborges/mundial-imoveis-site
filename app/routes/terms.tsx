export function meta() {
  return [
    { title: "Termos de Uso" },
    {
      name: "description",
      content: "Termos de uso do site mundialimoveisgo.com.br.",
    },
  ];
}

export default function Terms() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-center mb-6">Termos de Uso</h1>
        <p className="text-gray-700 mb-4">
          Bem-vindo ao site <strong>mundialimoveisgo.com.br</strong>, operado
          pela empresa{" "}
          <strong>Mundial Crédito Assessoria e Serviços LTDA</strong>. Ao
          acessar e utilizar este site, você concorda com os termos de uso
          descritos abaixo.
        </p>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Propósito do Site</h2>
          <p className="text-gray-700">
            O site <strong>mundialimoveisgo.com.br</strong> tem como objetivo
            disponibilizar informações sobre imóveis para venda e aluguel, além
            de serviços relacionados a crédito.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Usuários-Alvo</h2>
          <p className="text-gray-700">
            Este site é destinado a qualquer pessoa maior de idade. Ao
            utilizá-lo, você declara que cumpre esse requisito.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Restrições de Uso</h2>
          <p className="text-gray-700">
            Não há restrições de uso específicas para este site. No entanto, ao
            acessá-lo, você concorda em respeitar as regras e legislações
            vigentes.
          </p>
        </section>
        <footer className="text-center text-gray-600 mt-8">
          <p>
            Caso tenha dúvidas sobre estes termos, entre em contato conosco por
            meio das informações disponíveis no site.
          </p>
        </footer>
      </div>
    </div>
  );
}

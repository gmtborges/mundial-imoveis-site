export function meta() {
  return [
    { title: "Política de privacidade" },
    {
      name: "description",
      content: "Política de privacidade do site mundialimoveisgo.com.br.",
    },
  ];
}
export default function Privacy() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-center mb-6">
          Política de Privacidade
        </h1>
        <p className="text-gray-700 mb-4">
          A <strong>Mundial Crédito Assessoria e Serviços LTDA</strong>,
          responsável pelo site <strong>mundialimoveisgo.com.br</strong>,
          valoriza sua privacidade e está comprometida em proteger os dados
          pessoais coletados.
        </p>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Dados Coletados</h2>
          <p className="text-gray-700">
            Coletamos os seguintes dados pessoais dos usuários:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Email</li>
            <li>Telefone</li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            2. Finalidade da Coleta
          </h2>
          <p className="text-gray-700">
            Os dados coletados serão utilizados para envio de ofertas e ações de
            marketing.
          </p>
        </section>
        <footer className="text-center text-gray-600 mt-8">
          <p>
            Se você tiver dúvidas sobre esta política, entre em contato pelo
            email{" "}
            <a
              href="mailto:contato@mundialimoveisgo.com.br"
              className="text-blue-500 hover:underline"
            >
              contato@mundialimoveisgo.com.br
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
  );
}

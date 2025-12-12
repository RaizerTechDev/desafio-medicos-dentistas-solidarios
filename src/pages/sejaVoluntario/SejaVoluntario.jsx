import { useState } from "react";
import S from "./sejaVoluntario.module.scss";

export default function SejaVoluntario() {

    // estado do formulário (controlado)
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

    const [isSubmitting, setIsSubmitting] = useState(false);
    
      // seu número no formato que desejar (apenas números) — troque pelo seu real
  const phoneNumber = "554799327137"; // ex: 55 + DDD + número

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  }

  // utilitário: abre o WhatsApp com a mensagem montada
  function openWhatsApp(phone, { nome, email, telefone, mensagem }) {
    const cleanPhone = phone.toString().replace(/\D/g, "");
    const whatsappMessage =
      " Nova mensagem para inscrição de Voluntariado:\n\n" +
      ` Meu Nome: ${nome || "-"}\n\n` +
      ` Mensagem: ${mensagem || "-"}\n\n` +
      ` Email: ${email || "-"}\n` +
      (telefone ? `Telefone: ${telefone}\n` : "");

    const encoded = encodeURIComponent(whatsappMessage);
    const url = `https://wa.me/${cleanPhone}?text=${encoded}`;

    // abre em nova aba
    window.open(url, "_blank", "noopener,noreferrer");
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // validações simples
    if (!form.nome || !form.email || !form.telefone) {
      alert("Por favor preencha Nome, Email e Telefone.");
      return;
    }

    setIsSubmitting(true);

    // pequena espera pra dar feedback de envio (opcional)
    await new Promise((res) => setTimeout(res, 700));

    // abre o WhatsApp com a mensagem já preenchida
    openWhatsApp(phoneNumber, form);

    // reset do formulário (se quiser manter os dados, remova esse bloco)
    setForm({
      nome: "",
      email: "",
      telefone: "",
      mensagem: "",
    });

    setIsSubmitting(false);
  }

  return <main>
     <section className={S.voluntario}>
            <h2 className={S.voluntario__title}>Seja Voluntário</h2>
            <p className={S.voluntario_text}>
              Transformar vidas através do acesso universal a saúde de qualidade
            </p>
    
            <div className={S.voluntario_cards}>
              <article className={S.voluntario_card}>
                <h3>Impacto Direto</h3>
                <p>
                  Sua dedicação salva vidas e transforma comunidades.
                </p>
              </article>
    
              <article className={S.voluntario_card}>
                <h3>Crescimento Pessoal</h3>
                <p>
                  Desenvolva habilidades e cresça profissionalmente.
                </p>
              </article>
    
              <article className={S.voluntario_card}>
                <h3>Comunidade</h3>
                <p>
                  Faça parte de uma rede de profissionais comprometidos.
                </p>
              </article>
            </div>
          </section>  
     
      {/* ======================== */}
      {/* FORMULÁRIO */}
      {/* ======================== */}
      <section className={S.formWrapper}>
        <form className={S.form} onSubmit={handleSubmit} noValidate>
          <h2>Inscrição para Voluntários</h2>

          <div className={S.group}>
            <label>Dados Pessoais</label>

            <div className={S.twoFields}>
              <input
                name="nome"
                type="text"
                placeholder="Seu Nome *"
                value={form.nome}
                onChange={handleChange}
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Seu Email *"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <input
              name="telefone"
              type="text"
              placeholder="Seu Telefone *"
              value={form.telefone}
              onChange={handleChange}
              required
            />
          </div>

          <div className={S.group}>
            <label>Mensagem Adicional</label>
            <textarea
              name="mensagem"
              placeholder="Conte-nos porque você quer ser voluntário..."
              value={form.mensagem}
              onChange={handleChange}
            />
          </div>

          <p className={S.info}>Entraremos em contato para mais informações</p>

          <button type="submit" className={S.btnGreen} disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar Inscrição"}
          </button>
        </form>
      </section>
  </main>;
}



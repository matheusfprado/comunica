import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ContactSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function ContactMethod({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Contato com o Suporte da Amazon',
  description: 'Como entrar em contato com o suporte da Amazon Brasil.',
}

export default function Contact() {
  return (
    <SimpleLayout
      title="Entre em contato com o suporte da Amazon"
      intro="Se você precisa de ajuda com pedidos, devoluções, ou qualquer outro serviço, aqui estão as opções para entrar em contato com o suporte da Amazon Brasil."
    >
      <div className="space-y-20">
        <ContactSection title="Opções de Suporte">
          <ContactMethod title="Atendimento via Chat">
            Você pode conversar com um atendente da Amazon em tempo real para
            resolver seu problema. Basta clicar no link abaixo e iniciar a
            conversa.
          </ContactMethod>
          <ContactMethod title="Suporte por Telefone">
            Se preferir, você pode falar diretamente com um atendente da Amazon
            por telefone. Clique no link abaixo para agendar uma ligação ou
            obter o número de contato.
          </ContactMethod>
          <ContactMethod title="Atendimento por E-mail">
            Caso prefira, você também pode enviar um e-mail com a descrição do
            seu problema. A Amazon responderá o mais rápido possível.
          </ContactMethod>
        </ContactSection>
      </div>
    </SimpleLayout>
  )
}

import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({
  title,
  description,
  event,
  cta,
  href,
}: {
  title: string
  description: string
  event?: string
  cta?: string
  href?: string
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'Speaking',
  description:
    'I’ve spoken at events all around the world and been interviewed for many podcasts.',
}

export default function Speaking() {
  return (
    <SimpleLayout title="A comunicação da Amazon" intro="">
      <div className="space-y-20">
        <SpeakingSection title="Comunicação da Amazon">
          <Appearance
            href="#"
            title="Estratégias de Comunicação Empresarial da Amazon: Inovação e Foco no Cliente"
            description="A comunicação empresarial da Amazon é centrada na transparência, inovação e no foco no cliente. A empresa utiliza uma abordagem integrada, combinando canais internos e externos para promover uma cultura de colaboração e alinhamento estratégico. Internamente, destaca-se pelo uso de ferramentas digitais que facilitam a comunicação entre equipes globais, enquanto externamente mantém uma presença forte em redes sociais, comunicados à imprensa e estratégias de marketing, reforçando sua imagem como líder em tecnologia, varejo e sustentabilidade."
          />
          <Appearance
            href="#"
            title="Amazon: Como a Comunicação Empresarial Constrói Conexões Globais"
            description="
A comunicação empresarial da Amazon é um pilar essencial para sustentar sua operação global e seu sucesso contínuo. Com um foco estratégico na transparência e no alinhamento organizacional, a empresa utiliza uma combinação de ferramentas digitais, práticas inovadoras e uma abordagem orientada ao cliente para conectar equipes, parceiros e consumidores ao redor do mundo."
          />
        </SpeakingSection>
      </div>
    </SimpleLayout>
  )
}

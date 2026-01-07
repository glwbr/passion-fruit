import z from 'zod';
import { createFileRoute } from '@tanstack/react-router';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Section } from '@/components/shared/section';
import { PageHeader } from '@/components/shared/page-header';
import { useToast } from '@/hooks/use-toast';
import { useForm } from '@tanstack/react-form';
import { ZContactFormDataSchema } from '@/types/content';

export const Route = createFileRoute('/contato')({
  component: ContatoPage,
});

type TContactFormData = z.infer<typeof ZContactFormDataSchema>;

const defaultValues: TContactFormData = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

function ContatoPage() {
  const { toast } = useToast();

  const form = useForm({
    validators: {
      onSubmit: ZContactFormDataSchema,
    },
    defaultValues,
    onSubmit: async ({ value }) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log('Form submitted:', value);

      toast({
        title: 'Mensagem enviada!',
        description: 'Entraremos em contato em breve. Deus abençoe!',
      });

      form.reset();
    },
  });

  return (
    <Section>
      <div className="space-y-12">
        <PageHeader title="Contato" description="Entre em contato conosco. Será uma alegria atendê-lo!" />

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="bg-card rounded-2xl border p-6 sm:p-8">
            <h2 className="mb-6 text-xl font-semibold">Envie sua mensagem</h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                form.handleSubmit();
              }}
              className="space-y-5"
            >
              <form.Field name="name">
                {(field) => (
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome *</Label>
                    <Input
                      id="name"
                      placeholder="Seu nome completo"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={!!field.state.meta.errors.length}
                    />
                    {field.state.meta.errors.length > 0 && (
                      <p className="text-destructive text-sm">{field.state.meta.errors[0]?.message}</p>
                    )}
                  </div>
                )}
              </form.Field>

              <div className="grid gap-4 sm:grid-cols-2">
                <form.Field name="email">
                  {(field) => (
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        aria-invalid={!!field.state.meta.errors.length}
                      />
                      {field.state.meta.errors.length > 0 && (
                        <p className="text-destructive text-sm">{field.state.meta.errors[0]?.message}</p>
                      )}
                    </div>
                  )}
                </form.Field>

                <form.Field name="phone">
                  {(field) => (
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(11) 99999-9999"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                    </div>
                  )}
                </form.Field>
              </div>

              <form.Field name="subject">
                {(field) => (
                  <div className="space-y-2">
                    <Label htmlFor="subject">Assunto *</Label>
                    <Input
                      id="subject"
                      placeholder="Sobre o que você gostaria de falar?"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={!!field.state.meta.errors.length}
                    />
                    {field.state.meta.errors.length > 0 && (
                      <p className="text-destructive text-sm">{field.state.meta.errors[0]?.message}</p>
                    )}
                  </div>
                )}
              </form.Field>

              <form.Field name="message">
                {(field) => (
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea
                      id="message"
                      placeholder="Escreva sua mensagem aqui..."
                      rows={5}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={!!field.state.meta.errors.length}
                    />
                    {field.state.meta.errors.length > 0 && (
                      <p className="text-destructive text-sm">{field.state.meta.errors[0]?.message}</p>
                    )}
                  </div>
                )}
              </form.Field>

              <form.Subscribe selector={(state) => state.isSubmitting}>
                {(isSubmitting) => (
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>Enviando...</>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>
                )}
              </form.Subscribe>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-card space-y-6 rounded-2xl border p-6 sm:p-8">
              <h2 className="text-xl font-semibold">Informações da Igreja</h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                    <MapPin className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Endereço</h3>
                    <p className="text-muted-foreground">
                      Rua da Esperança, 123
                      <br />
                      Centro, São Paulo - SP
                      <br />
                      CEP: 01234-567
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                    <Phone className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Telefone</h3>
                    <a
                      href="tel:+551199999999"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      (11) 9999-9999
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                    <Mail className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">E-mail</h3>
                    <a
                      href="mailto:contato@atraidospelacruz.com.br"
                      className="text-muted-foreground hover:text-foreground break-all transition-colors"
                    >
                      contato@atraidospelacruz.com.br
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card space-y-6 rounded-2xl border p-6 sm:p-8">
              <h2 className="flex items-center gap-2 text-xl font-semibold">
                <Clock className="text-primary h-5 w-5" />
                Horários dos Cultos
              </h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between border-b py-2">
                  <div>
                    <p className="font-medium">Domingo</p>
                    <p className="text-muted-foreground text-sm">Escola Bíblica Dominical</p>
                  </div>
                  <span className="text-primary font-semibold">09:00</span>
                </div>

                <div className="flex items-center justify-between border-b py-2">
                  <div>
                    <p className="font-medium">Domingo</p>
                    <p className="text-muted-foreground text-sm">Culto da Família</p>
                  </div>
                  <span className="text-primary font-semibold">19:00</span>
                </div>

                <div className="flex items-center justify-between py-2">
                  <div>
                    <p className="font-medium">Quinta-feira</p>
                    <p className="text-muted-foreground text-sm">Culto Profético</p>
                  </div>
                  <span className="text-primary font-semibold">19:30</span>
                </div>
              </div>
            </div>

            <div className="bg-muted/50 flex h-48 items-center justify-center rounded-2xl border">
              <div className="text-muted-foreground text-center">
                <MapPin className="mx-auto mb-2 h-8 w-8 opacity-50" />
                <p className="text-sm">Add map</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

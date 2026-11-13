import { Section, Container, Button, Card, Badge } from '../components/ui';

const CONTACT = {
  email: 'arikaran4044@gmail.com',
  phone: '+91 9940444012',
  location: 'Tamil Nadu, India',
};

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const params = new URLSearchParams({
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    });
    window.location.href = `mailto:${CONTACT.email}?subject=Portfolio Contact: ${params.get('name')}&body=${params.get('message')}%0A%0AFrom: ${params.get('email')}`;
  };

  return (
    <div className="bg-white min-h-screen">
      <Section padding="py-24">
        <Container>
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div className="space-y-8">
              <div className="flex items-center gap-2 mb-6">
                <Badge variant="violet">Get in Touch</Badge>
              </div>
              <h2 className="text-4xl font-bold leading-tight mb-6">
                Let's build something great together
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
                Have a project in mind or just want to say hello? Reach out
                using the details below or send a message.
              </p>
              <div className="space-y-6">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-start gap-4"
                >
                  <span className="text-gray-600 mt-0.5">✉</span>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600 text-sm">{CONTACT.email}</p>
                  </div>
                </a>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="flex items-start gap-4"
                >
                  <span className="text-gray-600 mt-0.5">📞</span>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600 text-sm">{CONTACT.phone}</p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <span className="text-gray-600 mt-0.5">📍</span>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-600 text-sm">{CONTACT.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <Card padding="p-8 lg:p-12" hover={false}>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-violet-600 focus:outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-violet-600 focus:outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-violet-600 focus:outline-none transition-all"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <Button type="submit" variant="primary" className="w-full py-3">
                  Send Message
                </Button>
                <p className="text-xs text-gray-500 text-center mt-2">
                  Opens your default email client to send the message.
                </p>
              </form>
            </Card>
          </div>
        </Container>
      </Section>
    </div>
  );
}
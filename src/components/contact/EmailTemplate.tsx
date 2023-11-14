import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface Props {
  email: string;
  name: string;
  message: string;
}

const EmailTemplate = ({ email, name, message }: Props) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-10 w-[465px] rounded border border-solid border-[#eaeaea] p-5">
            <Section className="mt-8">
              <Img
                src="https://www.hobbes.codes/_next/image?url=/hobbescodes.webp&w=1200&q=75"
                alt="hobbescodes"
                width="80"
                height="80"
                className="mx-auto my-0 rounded-full"
              />
            </Section>
            <Heading className="mb-2 mt-7 text-center text-xl text-black">
              <span className="text-[#f841a2]">{name}</span> has reached out!
            </Heading>
            <Text className="w-full text-center">
              <Link href={`mailto:${email}`} className="text-[#f841a2] no-underline">
                {email}
              </Link>
            </Text>
            <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />
            <Heading className="my-7 text-center text-xl text-black">Message:</Heading>
            <Text className="w-full text-center">{message}</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailTemplate;

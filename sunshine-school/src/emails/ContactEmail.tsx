import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Section,
    Text,
} from '@react-email/components';
import * as React from 'react';

interface ContactEmailProps {
    parentName: string;
    phone: string;
    email?: string;
    childAge?: string;
    program?: string;
    message?: string;
}

export const ContactEmail = ({
    parentName,
    phone,
    email,
    childAge,
    program,
    message,
}: ContactEmailProps) => {
    return (
        <Html>
            <Head />
            <Preview>Nova poruka sa sajta od {parentName}</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Heading style={h1}>Nova poruka sa sajta</Heading>

                    <Section style={{ padding: '24px', border: '1px solid #e6ebf1', borderRadius: '12px', backgroundColor: '#ffffff' }}>
                        <Text style={text}>
                            <strong>Ime roditelja:</strong> {parentName}
                        </Text>
                        <Text style={text}>
                            <strong>Telefon:</strong> {phone}
                        </Text>
                        {email && (
                            <Text style={text}>
                                <strong>Email:</strong> {email}
                            </Text>
                        )}
                        <Hr style={hr} />

                        {childAge && (
                            <Text style={text}>
                                <strong>Uzrast deteta:</strong> {childAge}
                            </Text>
                        )}

                        {program && (
                            <Text style={text}>
                                <strong>Program:</strong> {program}
                            </Text>
                        )}

                        {message && (
                            <>
                                <Hr style={hr} />
                                <Text style={text}>
                                    <strong>Poruka:</strong>
                                </Text>
                                <Text style={paragraph}>{message}</Text>
                            </>
                        )}
                    </Section>

                    <Text style={footer}>
                        Ovo je automatska poruka sa sajta Sunshine School.
                    </Text>
                </Container>
            </Body>
        </Html>
    );
};

// Styles
const main = {
    backgroundColor: '#f6f9fc',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
    padding: '40px 0',
};

const container = {
    backgroundColor: '#ffffff',
    margin: '0 auto',
    padding: '20px 0 48px',
    marginBottom: '64px',
    maxWidth: '600px',
};

const h1 = {
    color: '#333',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '30px 0',
    padding: '0',
    textAlign: 'center' as const,
};

const text = {
    color: '#333',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
    fontSize: '16px',
    lineHeight: '24px',
    margin: '12px 0',
};

const paragraph = {
    color: '#555',
    fontSize: '16px',
    lineHeight: '26px',
    margin: '16px 0',
    whiteSpace: 'pre-wrap' as const,
};

const hr = {
    borderColor: '#e6ebf1',
    margin: '20px 0',
};

const footer = {
    color: '#8898aa',
    fontSize: '12px',
    lineHeight: '16px',
    textAlign: 'center' as const,
    marginTop: '32px',
};

export default ContactEmail;

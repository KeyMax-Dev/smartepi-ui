import type React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import {
	Badge,
	Button,
	CardBase,
	Checkbox,
	Form,
	Icon,
	ImageAvatar,
	Input,
	Select,
	Tab,
	Table,
	TableColumn,
	Tabs,
	TextArea,
	useForm,
	useModal,
	useToast,
} from '../../../lib';

const Container = styled.div`
	min-height: 100vh;
	padding: 40px 20px;
	background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;

const Content = styled.div`
	max-width: 1200px;
	margin: 0 auto;
`;

const Title = styled.h1`
	color: white;
	text-align: center;
	margin-bottom: 10px;
	font-size: 3rem;
	font-weight: 700;
`;

const Subtitle = styled.p`
	color: rgba(255, 255, 255, 0.9);
	text-align: center;
	margin-bottom: 40px;
	font-size: 1.2rem;
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
	gap: 20px;
	margin-bottom: 20px;
`;

const Section = styled.div`
	margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
	color: white;
	margin-bottom: 20px;
	font-size: 1.8rem;
	font-weight: 600;
`;

const ButtonGroup = styled.div`
	display: flex;
	gap: 10px;
	flex-wrap: wrap;
	margin-bottom: 15px;
`;

interface FormData {
	[key: string]: any;
	name: string;
	email: string;
	password: string;
	bio: string;
	country: string;
	terms: boolean;
}

const tableData = [
	{ id: 1, name: 'João Silva', role: 'Developer', status: 'Ativo' },
	{ id: 2, name: 'Maria Santos', role: 'Designer', status: 'Ativo' },
	{ id: 3, name: 'Pedro Costa', role: 'Manager', status: 'Inativo' },
];

export function HomePage(): React.JSX.Element {
	const [_selectedTab, setSelectedTab] = useState(0);
	const [checkboxValue, setCheckboxValue] = useState(false);
	const modal = useModal(<div />);
	const toastController = useToast(<div />);

	// Helper functions for toast notifications
	const showToast = (message: string, color: string) => {
		toastController.setContent(<span>{message}</span>);
		(toastController as any).config.color = color;
		toastController.open();
	};

	const toast = {
		success: (msg: string) => showToast(msg, 'success'),
		error: (msg: string) => showToast(msg, 'danger'),
		warning: (msg: string) => showToast(msg, 'secondary'),
		info: (msg: string) => showToast(msg, 'primary'),
	};

	const form = useForm<FormData>({
		name: {
			value: '',
			validators: [(v: string) => (v ? null : 'Nome é obrigatório')],
		},
		email: {
			value: '',
			validators: [(v: string) => (v.includes('@') ? null : 'Email inválido')],
		},
		password: {
			value: '',
			validators: [
				(v: string) => (v.length >= 6 ? null : 'Mínimo 6 caracteres'),
			],
		},
		bio: { value: '' },
		country: { value: '' },
		terms: {
			value: false,
			validators: [(v: boolean) => (v ? null : 'Aceite os termos')],
		},
	});

	const handleSubmit = () => {
		if (form.validate()) {
			const values = form.getValues();
			toast.success(
				`Formulário enviado com sucesso! Bem-vindo, ${values.name}!`,
			);
			console.log('Form values:', values);
		} else {
			toast.error('Por favor, corrija os erros no formulário');
		}
	};

	const showModal = () => {
		modal.setContent(
			<CardBase style={{ padding: '30px', minWidth: '400px' }}>
				<h2 style={{ marginTop: 0 }}>Modal de Exemplo</h2>
				<p>Este é um modal criado com o componente useModal.</p>
				<p>Você pode adicionar qualquer conteúdo React aqui!</p>
				<ButtonGroup>
					<Button text="Fechar" onClick={() => modal.close()} />
					<Button
						color="success"
						onClick={() => {
							toast.success('Ação confirmada!');
							modal.close();
						}}
						text="Confirmar"
					/>
				</ButtonGroup>
			</CardBase>,
		);
		modal.open();
	};

	return (
		<Container>
			<Content>
				<Title>SmartEPI UI</Title>
				<Subtitle>
					Biblioteca de componentes React moderna com Framer Motion e Styled
					Components
				</Subtitle>

				<Section>
					<SectionTitle>🎨 Botões e Badges</SectionTitle>
					<Grid>
						<CardBase>
							<h3>Botões</h3>
							<ButtonGroup>
								<Button
									text="Primary"
									onClick={() => toast.info('Botão primary clicado!')}
								/>
								<Button
									color="secondary"
									text="Secondary"
									onClick={() => toast.info('Botão secondary!')}
								/>
								<Button
									color="success"
									text="Success"
									onClick={() => toast.success('Sucesso!')}
								/>
								<Button
									text="Danger"
									color="danger"
									onClick={() => toast.error('Erro!')}
								/>
								<Button
									color="secondary"
									text="Secondary"
									onClick={() => toast.warning('Atenção!')}
								/>
							</ButtonGroup>
							<ButtonGroup>
								<Button buttonType="icon" icon="settings" iconSize="30px" />
								<Button buttonType="icon" icon="search" iconSize="30px" />
								<Button buttonType="icon" icon="close" iconSize="30px" />
							</ButtonGroup>
						</CardBase>

						<CardBase>
							<h3>Badges e Ícones</h3>
							<ButtonGroup>
								<Badge>Default</Badge>
								<Badge color="success">Success</Badge>
								<Badge color="danger">Danger</Badge>
								<Badge color="secondary">Secondary</Badge>
							</ButtonGroup>
							<ButtonGroup style={{ marginTop: '15px' }}>
								<Icon name="settings" width="40px" height="40px" />
								<Icon
									name="search"
									width="40px"
									height="40px"
									color="success"
								/>
								<Icon name="close" width="40px" height="40px" color="danger" />
								<Icon
									name="menu"
									width="40px"
									height="40px"
									color="secondary"
								/>
							</ButtonGroup>
						</CardBase>
					</Grid>
				</Section>

				<Section>
					<SectionTitle>📝 Formulário Completo</SectionTitle>
					<CardBase>
						<Form>
							<Input
								{...form.getFieldProps('name')}
								placeholder="Nome completo"
								containerType="outline"
								iconLeft="person"
							/>

							<Input
								{...form.getFieldProps('email')}
								type="email"
								placeholder="Email"
								containerType="outline"
								iconLeft="email"
							/>

							<Input
								{...form.getFieldProps('password')}
								type="password"
								placeholder="Senha"
								containerType="outline"
								iconLeft="lock"
							/>

							<Select
								{...form.getFieldProps('country')}
								placeholder="Selecione um país"
								data={[
									{ label: 'Brasil', value: 'BR' },
									{ label: 'Portugal', value: 'PT' },
									{ label: 'Estados Unidos', value: 'US' },
									{ label: 'Espanha', value: 'ES' },
								]}
								dataKey="label"
							/>

							<TextArea
								{...form.getFieldProps('bio')}
								placeholder="Conte-nos sobre você..."
								rows={4}
							/>

							<Checkbox
								{...form.getFieldProps('terms')}
								size="30px"
								color="success"
							>
								<span style={{ marginLeft: '10px' }}>
									Aceito os termos e condições
								</span>
							</Checkbox>

							<ButtonGroup style={{ marginTop: '20px' }}>
								<Button text="Enviar" onClick={handleSubmit} color="success" />
								<Button
									onClick={() => form.reset()}
									color="secondary"
									text="Limpar"
									buttonType="outline"
								/>
							</ButtonGroup>
						</Form>
					</CardBase>
				</Section>

				<Section>
					<SectionTitle>🗂️ Tabs e Conteúdo</SectionTitle>
					<CardBase>
						<Tabs onTabChange={setSelectedTab}>
							<Tab title="Perfil">
								<div style={{ padding: '20px' }}>
									<h3>Perfil do Usuário</h3>
									<ImageAvatar
										src="https://i.pravatar.cc/150?img=12"
										size="100px"
									/>
									<p>Nome: João Silva</p>
									<p>Email: joao@example.com</p>
									<p>Cargo: Desenvolvedor Senior</p>
								</div>
							</Tab>
							<Tab title="Configurações">
								<div style={{ padding: '20px' }}>
									<h3>Configurações</h3>
									<Checkbox
										value={checkboxValue}
										onToggle={(v) =>
											setCheckboxValue((v.target as HTMLInputElement).checked)
										}
										size="25px"
									>
										<span style={{ marginLeft: '10px' }}>
											Receber notificações
										</span>
									</Checkbox>
									<Checkbox
										value={true}
										size="25px"
										style={{ marginTop: '10px' }}
									>
										<span style={{ marginLeft: '10px' }}>Modo escuro</span>
									</Checkbox>
								</div>
							</Tab>
							<Tab title="Sobre">
								<div style={{ padding: '20px' }}>
									<h3>Sobre o SmartEPI UI</h3>
									<p>Versão: 0.3.0</p>
									<p>React: 19.2.3</p>
									<p>TypeScript: 5.9.3</p>
									<p>Framer Motion: 12.24.12</p>
								</div>
							</Tab>
						</Tabs>
					</CardBase>
				</Section>

				<Section>
					<SectionTitle>📊 Tabela de Dados</SectionTitle>
					<CardBase>
						<Table data={tableData}>
							<TableColumn key="id" name="ID">
								{(row: (typeof tableData)[0]) => row.id}
							</TableColumn>
							<TableColumn key="name" name="Nome">
								{(row: (typeof tableData)[0]) => row.name}
							</TableColumn>
							<TableColumn key="role" name="Cargo">
								{(row: (typeof tableData)[0]) => row.role}
							</TableColumn>
							<TableColumn key="status" name="Status">
								{(row: (typeof tableData)[0]) => (
									<Badge color={row.status === 'Ativo' ? 'success' : 'danger'}>
										{row.status}
									</Badge>
								)}
							</TableColumn>
						</Table>
					</CardBase>
				</Section>

				<Section>
					<SectionTitle>🎭 Modais e Toasts</SectionTitle>
					<Grid>
						<CardBase>
							<h3>Modais</h3>
							<p>Clique no botão para abrir um modal:</p>
							<Button color="success" text="Abrir Modal" onClick={showModal} />
						</CardBase>

						<CardBase>
							<h3>Notificações Toast</h3>
							<ButtonGroup>
								<Button
									onClick={() => toast.success('Operação bem-sucedida!')}
									color="success"
									text="Success Toast"
								/>
								<Button
									onClick={() => toast.error('Ocorreu um erro!')}
									color="danger"
									text="Error Toast"
								/>
								<Button
									onClick={() => toast.warning('Atenção necessária!')}
									color="secondary"
									text="Warning Toast"
								/>
								<Button
									onClick={() => toast.info('Informação útil!')}
									color="primary"
									style={{ border: '1px solid', borderColor: '#FFF' }}
									text="Info Toast"
								/>
							</ButtonGroup>
						</CardBase>
					</Grid>
				</Section>
			</Content>
		</Container>
	);
}

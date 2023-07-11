import { SOBRE_MI, CLIENTES } from '@/contents/contenido';
import Carousel from '@/components/Carousel';
import Clientes from '@/components/Clientes';
import Contenido from '@/components/Contenido';
import Metodos from '@/components/Metodos';
import Packs from '@/components/Packs';
import Productos from '@/components/Productos';
import Layout from '@/layout/Layout';

export default function Home() {
	return (
		<Layout pagina={'Inicio'}>
			<Carousel />
			{SOBRE_MI.map(contenido => (
				<Contenido
					key={contenido.id}
					contenido={contenido.titulo}
					enlace={contenido.enlace}
				/>
			))}
			<Packs />
			<Productos />
			{CLIENTES.map(contenido => (
				<Contenido
					key={contenido.id}
					contenido={contenido.titulo}
					enlace={contenido.enlace}
				/>
			))}
			<Clientes />
			<Metodos />
		</Layout>
	);
}

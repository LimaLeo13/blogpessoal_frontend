import Tema from './Tema';
import Usuario from './UsuarioLogin';

export default interface Postagem {
  id: number;
  titulo: string;
  texto: string;
  data: string;
  tema: Tema | null;
  usuario: Usuario | null;
}
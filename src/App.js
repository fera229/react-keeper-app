import './App.css';
import Footer from './componants/Footer';
import Header from './componants/Header';
import Note from './componants/Note';
import notes from './notes';

export default function App() {
  return (
    <>
      <Header />
      {notes.map((note) => (
        <Note key={note.key} title={note.title} content={note.content} />
      ))}
      <Footer />
    </>
  );
}

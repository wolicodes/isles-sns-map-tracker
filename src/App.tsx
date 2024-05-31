import EditableCell from './EditableCell';
import { styles } from './GridStyles';

function App() {
  const elems = Array.from({ length: 25 }, () => Math.random());

  return (
    <>
      <div className={styles.parent}>
        {elems.map((id) => (
          <EditableCell key={id} />
        ))}
      </div>
    </>
  );
}

export default App;

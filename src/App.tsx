import EditableCell from './EditableCell';
import { styles } from './GridStyles';

function App() {
  const elems = Array.from({ length: 25 }, () => '');

  return (
    <>
      <div className={styles.parent}>
        {elems.map((elem, i) => (
          <EditableCell cellId={i} key={i} />
        ))}
      </div>
    </>
  );
}

export default App;

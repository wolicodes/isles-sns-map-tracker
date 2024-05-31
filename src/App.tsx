import EditableCell from './EditableCell';
import { styles } from './GridStyles';
import ResetButton from './ResetButton';

function App() {
  const elems = Array.from({ length: 25 }, () => '');

  return (
    <>
      <div className={styles.parent}>
        {elems.map((_, i) => (
          <EditableCell cellId={i} key={i} />
        ))}
      </div>
      <ResetButton />
    </>
  );
}

export default App;

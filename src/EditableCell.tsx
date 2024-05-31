import React, { useCallback, useEffect, useRef, useState } from 'react';
import { styles } from './GridStyles';

interface Props {
  cellId: number;
}

const EditableCell: React.FC<Props> = ({ cellId }) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [editable, setEditable] = useState(false);
  const [currentValue, setCurrentValue] = useState<string>(() => {
    const storedValue = localStorage.getItem(
      `editableCellCurrentValue${cellId}`,
    );
    return storedValue !== null ? storedValue : '';
  });

  useEffect(() => {
    if (editable && inputRef.current) {
      const textarea = inputRef.current;
      textarea.focus();
      textarea.setSelectionRange(textarea.value.length, textarea.value.length);
    }
  }, [editable]);

  useEffect(() => {
    localStorage.setItem(`editableCellCurrentValue${cellId}`, currentValue);
  }, [cellId, currentValue]);

  const setEditableOff = useCallback(() => {
    setEditable(false);
  }, []);

  const setEditableOn = useCallback(() => {
    setEditable(true);
  }, []);

  const handleTyping = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCurrentValue(e.target.value);
    },
    [],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        setEditableOff();
      }
    },
    [setEditableOff],
  );

  const renderContent = () => {
    if (editable) {
      return (
        <textarea
          ref={inputRef}
          value={currentValue}
          onBlur={setEditableOff}
          onChange={handleTyping}
          onKeyDown={handleKeyDown}
        />
      );
    } else if (currentValue === 'X') {
      return <div className={styles.redCross}>❌</div>;
    } else {
      return <span>{convertNewlinesToBr(currentValue)}</span>;
    }
  };

  const convertNewlinesToBr = (text: string) => {
    return text.split('\n').map((item, index) => (
      <React.Fragment key={index}>
        {item}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div className={styles.child} onClick={setEditableOn}>
      {renderContent()}
    </div>
  );
};

export default EditableCell;

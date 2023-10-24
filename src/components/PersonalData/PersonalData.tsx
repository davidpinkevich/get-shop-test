import { useAppSelector } from '../../hooks';
import ButtonCheck from '../buttons/ButtonCheck/ButtonCheck';
import './PersonalData.scss';

const PersonalData = () => {
  const valid = useAppSelector((state) => state.infoReducer.validNumber);
  const openData = valid === null || valid === true;
  return (
    <div className="personal">
      {openData && (
        <>
          <ButtonCheck />
          <p className="personal__info">Согласие на обработку персональных данных</p>
        </>
      )}
      {valid === false && <p className="personal__error">Неверно введён номер</p>}
    </div>
  );
};

export default PersonalData;

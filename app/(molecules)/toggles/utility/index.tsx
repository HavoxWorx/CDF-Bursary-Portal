'use client';

// import Overlays from '../../overlays';

// === === === === === === == Render == === === === === === ===//
const utilityToggle = ({ id, title, state, purpose }: any) => {

  return (
    <label id={id} className={id}>
      <input
        title={title + ' Toggle'}
        type="checkbox"
        checked={state}
        onChange={purpose}
      ></input>
      <div>
        <span></span>
        <span></span>
      </div>
    </label>
  );
};

export default utilityToggle;
// === === === === === === == Render == === === === === === ===//

import React from "react";
import Input from "../inputs/Input";
import Radio from "./Radio";

function RadioInputForm({
  inputLeftSymbol,
  inputRightSymbol,
  inputType,
  options,
  radioValue,
  onRadioChange,
  inputValue,
  onInputChange,
  onSubmit,
}) {
  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col py-2 space-y-2">
        {Object.keys(options).map((key) => {
          return (
            <div key={"radio_option_" + key}>
              <Radio
                selected={radioValue}
                radioValue={key}
                radioLabel={options[key].name}
                id={key}
                onChange={onRadioChange}
              />
              <div className="my-1">
                {key === radioValue && (
                  <Input
                    placeholder="Enter a value here..."
                    initialValue={inputValue}
                    onChange={onInputChange}
                    symbolLeft={inputLeftSymbol}
                    symbolRight={inputRightSymbol}
                    type={inputType}
                    id="radio-form-input"
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </form>
  );
}

export default RadioInputForm;

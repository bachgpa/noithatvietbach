// thành phần gọi tới function
{
  /* 
<div className="form" id = "form-1" action="" method="POST">
   <div className='form-group'>
      <label for="fullname" className="form-label">tên đầy đủ</label>
      <input id = "fullname" name="fullname" type="text" placeholder="VD: Sơn đặng"/>
      <span className="form-message"></span>
   </div>
</div>
*/
}

// thành phần được truyền vào trong function
// {
//    form: 'form-1',
//    rules: [
//       Validator.isRequired('#fullname'),
//       Validator.isEmail('#email'),
//    ]
// }
FormComponent.isRequired = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim()
        ? undefined
        : "vui long nhap truong nay";
    },
  };
};
FormComponent.minLength = function (selector, min) {
  return {
    selector: selector,
    test: function (value) {
      return value.length >= min
        ? undefined
        : `Vui lòng nhập tối thiếu ${min} kí tự`;
    },
  };
};
FormComponent.isConfirmed = function (
  selector,
  getConfirmValue
) {
  return {
    selector: selector,
    test: function (value) {
      return value === getConfirmValue()
        ? undefined
        : "Giá trị nhập vào không chính xác";
    },
  };
};

FormComponent.isEmail = function (selector) {
  console.log("formComponent isEmail");
  return {
    selector: selector,
    test: function (value) {
      var regex =
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value)
        ? undefined
        : "Trường này phải là email";
    },
  };
};

function FormComponent({ object }) {
  //thực hiện validate
  function Validate(inputElement, rule) {
    var errorElement =
      inputElement.parentElement.querySelector(
        object.errorSelector
      );
    var errorMessage = rule.test(inputElement.value);
    if (errorMessage) {
      errorElement.innerText = errorMessage;
      inputElement.parentElement.classList.add("invalid");
    } else {
      errorElement.innerText = "";
      inputElement.parentElement.classList.remove(
        "invalid"
      );
    }
  }
  //lấy element của form cần validate
  var formElement = document.querySelector(object.form);
  if (formElement) {
    object.rules.forEach((rule) => {
      var inputElement = formElement.querySelector(
        rule.selector
      );

      if (inputElement) {
        //blur khỏi input
        inputElement.onblur = function () {
          Validate(inputElement, rule);
        };
        //typing input
        inputElement.oninput = function () {
          var errorElement =
            inputElement.parentElement.querySelector(
              object.errorSelector
            );
          errorElement.innerText = "";
          inputElement.parentElement.classList.remove(
            "invalid"
          );
        };
      }
    });
  }
  return "hihi";
}

export default FormComponent;

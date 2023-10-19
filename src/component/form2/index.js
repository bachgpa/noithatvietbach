/* <div className="form-group">
  <label for="fullname" className="form-label">
    {" "}
    ten day du
  </label>
  <input
    id="fullname"
    name="fullname"
    rules="required"
    type="text"
    placeholder="VD: Son Dang"
    className="form-input"
  ></input>
  <span className="form-message"></span>
</div>; */

function Form({ formSelector }) {
  // lấy phần tử cha, truyền vào element kích hoạt, selector của thẻ cha
  function getParent(element, selector) {
    // vòng lặp while, khi có thể lấy phần tử cha của element
    while (element.parentElement) {
      // nếu phần tử cha trùng selector thì return phần tử cha đó
      if (element.parentElement.matches(selector)) {
        return element.parentElement;
      }
      // nếu không sẽ lọt xuống đây, element được gắn bằng cha nó và chạy lại
      element = element.parentElement;
    }
  }

  console.log("form running");
  // formRules sẽ là ptu tóm gọn thông tin validate
  var formRules = {};
  // các rules để validate nằm trong validatorRules
  var validatorRules = {
    required: function (value) {
      return value ? undefined : "Vui lòng nhập trường này";
    },
    email: function (value) {
      var regex =
        // eslint-disable-next-line
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value)
        ? undefined
        : "Vui lòng nhập trường này";
    },
    min: function (min) {
      return function (value) {
        return value.length >= min
          ? undefined
          : `Vui lòng nhập tối thiếu ${min} ký tự`;
      };
    },
    max: function (max) {
      return function (value) {
        return value.length <= max
          ? undefined
          : `Vui lòng nhập tối đa ${max} ký tự`;
      };
    },
  };

  // lấy ra formElement trong dom theo formSelector
  var formElement = document.querySelector(formSelector);

  //chỉ xử lý khi có element trong DOM
  if (formElement) {
    // lấy ra tất cả input trong form
    var inputs =
      formElement.querySelectorAll("[name][rules]");
    for (var input of inputs) {
      // trong từng input, lấy giá trị của rules và xử lý
      var rules = input.getAttribute("rules").split("|");
      for (var rule of rules) {
        //
        var isRuleHasValue = rule.includes(":");
        var ruleInfo;

        if (isRuleHasValue) {
          ruleInfo = rule.split(":");
          rule = ruleInfo[0];
        }

        var ruleFunc = validatorRules[rule];

        if (isRuleHasValue) {
          ruleFunc = ruleFunc(ruleInfo[1]);
        }

        if (Array.isArray(formRules[input.name])) {
          formRules[input.name].push(ruleFunc);
        } else {
          formRules[input.name] = [ruleFunc];
        }
      }
      console.log(input);
      input.onblur = handleValidate;
      // input.oninput = handleClear;
      input.onchange = handleClear;
    }

    function handleValidate(event) {
      var rules = formRules[event.target.name];
      var errorMessage;
      rules.find(function (rule) {
        errorMessage = rule(event.target.value);
        return errorMessage;
      });

      console.log(errorMessage);

      if (errorMessage) {
        var formGroup = getParent(
          event.target,
          ".form-group"
        );
        if (formGroup) {
          formGroup.classList.add("invalid");
          var formMessage =
            formGroup.querySelector(".form-message");
          if (formMessage) {
            formMessage.innerText = errorMessage;
          }
        }
      }
    }

    function handleClear(event) {
      var formGroup = getParent(
        event.target,
        ".form-group"
      );
      if (formGroup.classList.contains("invalid")) {
        formGroup.classList.remove("invalid");
        var formMessage =
          formGroup.querySelector(".form-message");
        if (formMessage) {
          formMessage.innerText = "";
        }
      }
    }
    // console.log("formRules:", formRules);
  }
  return <div>hihihihi</div>;
}

export default Form;

export const checkValidData = (email, password, name, isSignUpForm) => {
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(password);
    const isNameValid = /^(([A-za-z]+[\s]{1}[A-za-z]+)|([A-Za-z]+))$/gim.test(name);

    if(!isEmailValid) return "Email is invalid";
    if(!isPasswordValid) return "Password is invalid"
    if(!isNameValid && isSignUpForm) return "Name is invalid"

    return null;
}
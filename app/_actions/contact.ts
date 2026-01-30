"use server";

function validateEmail(email: string){
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(email);
}

export async function createContactData(_prevState: any, formData: formData){
    
   const dataList = ['lastname', 'firstname', 'memberid', 'password', 'email', 'profile'];

   const rawFormData: Record<string,string> = {};

   for (const data of dataList){
    const value = formData.get(data);
    if (!value || value.toString().trim() === ""){
        return {
            status: "error",
            message: `${data}が入力されていません`
        };
    }
    if(data === "email"){
            if(!validateEmail(value)){
                return {
                    status: "error",
                    message: "メールアドレスの形式が間違っています"
                };
            }
    }
    rawFormData[data] = value.toString();
   }

   return {
    status: "success",
    message: "OK"
   };
}
    

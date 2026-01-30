/*"use server";

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
   const result = await fetch("https://api.hsforms.com/submissions/v3/integration/subnmit/${process.env.HUBSPOT_PORTAL_ID}/${process.env.HUBSPOT_FORM_ID}",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            fields: [
                {
                    objecttypeId: "0-1",
                    name: "lastname",
                    value: rawFormData['lastname'],
                },
                {
                    objecttypeId: "0-1",
                    name: "firstname",
                    value: rawFormData['firstname'],
                },
                {
                    objecttypeId: "0-1",
                    name: "memberid",
                    value: rawFormData['memberid'],
                },
                {
                    objecttypeId: "0-1",
                    name: "password",
                    value: rawFormData['password'],
                },
                {
                    objecttypeId: "0-1",
                    name: "email",
                    value: rawFormData['email'],
                },
                {
                    objecttypeId: "0-1",
                    name: "profile",
                    value: rawFormData['profile'],
                },
            ],
        }),
    },

   );
   try {
    await result.json();
   } catch(e){
    console.log(e);
    return {
        status: "error",
        message: "HUBSPOTへの送信に失敗しました",
    };
   }

   return {
    status: "success",
    message: "OK"
   };
}*/
// app/_actions/contact.ts
'use server';

function validateEmail(email: string): boolean {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

export async function createContactData(
    _prevState: any, 
    formData: FormData
): Promise<{ status: string; message: string }> {
    
    const dataList = ['lastname', 'firstname', 'memberid', 'password', 'email', 'profile'];
    const rawFormData: Record<string, string> = {};

    for (const field of dataList) {
        const value = formData.get(field) as string | null;
        
        if (!value || value.trim() === "") {
            return {
                status: "error",
                message: `${field}が入力されていません`
            };
        }
        
        const trimmedValue = value.trim();
        
        if (field === "email" && !validateEmail(trimmedValue)) {
            return {
                status: "error",
                message: "メールアドレスの形式が間違っています"
            };
        }
        
        rawFormData[field] = trimmedValue;
    }
    
    // 環境変数のチェック
    const portalId = process.env.HUBSPOT_PORTAL_ID;
    const formId = process.env.HUBSPOT_FORM_ID;
    
    if (!portalId || !formId) {
        console.error('HubSpot環境変数が設定されていません');
        return {
            status: "error",
            message: "システムエラーが発生しました"
        };
    }
    
    try {
        const hubspotUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;
        
        const response = await fetch(hubspotUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                fields: [
                    {
                        objectTypeId: "0-1",
                        name: "lastname",
                        value: rawFormData['lastname'],
                    },
                    {
                        objectTypeId: "0-1",
                        name: "firstname",
                        value: rawFormData['firstname'],
                    },
                    {
                        objectTypeId: "0-1",
                        name: "memberid",
                        value: rawFormData['memberid'],
                    },
                    {
                        objectTypeId: "0-1",
                        name: "password",
                        value: rawFormData['password'],
                    },
                    {
                        objectTypeId: "0-1",
                        name: "email",
                        value: rawFormData['email'],
                    },
                    {
                        objectTypeId: "0-1",
                        name: "profile",
                        value: rawFormData['profile'],
                    },
                ],
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`HubSpot APIエラー (${response.status}):`, errorText);
            return {
                status: "error",
                message: `送信に失敗しました (${response.status})`
            };
        }

        console.log('HubSpot送信成功');
        
    } catch (error) {
        console.error('HubSpot接続エラー:', error);
        return {
            status: "error",
            message: "通信エラーが発生しました"
        };
    }

    return {
        status: "success",
        message: "お問い合わせを受け付けました"
    };
}
    

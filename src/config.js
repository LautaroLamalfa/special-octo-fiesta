export default{
    fileSystem: {
        path: './DB'
    },
    firebase: {
            "type": "service_account",
            "project_id": "backend-8f307",
            "private_key_id": "73c5b190c92dfa78dfadd98620fb1b0d6791095a",
            "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC5eOC97MFTE3Kq\n6w50AwSXDqafOlP+AJM04p7b/OiTvfwmLnTKrsJgMf2Ofmp7WiGD3gm/uaP+J7Ng\nEGaKqfJX9anFRowoNFV8/V/h2fR094hVmRk+wDkRDnAlukfLqsiwjFWsbW3KRWzW\n96QidA5gnPxCvywWFxeqyvVHxl5kXe/RBXHhZFbmUWNY7QqqX4bvjsmevl3YgVaJ\n0Y8mWfJQgXeI9/e+nyftOFYxsUNxJE7f1f7BmXXIesk9asOXE7VXISq3I6RZ3551\n3gMkc10+89AV0QVNWe4+ONdmRWy10ZvXlTdazNALBSD1fq5L8dQinCz86sHBE+Oz\n4amuUtppAgMBAAECggEADc+Zm6btO+qRMbdEaaDeZwGzKFzza3D/RTNBXVQDPRoq\n9CxmK8AQ7xEV5pYVB4euAnfmnbFdC/RInAUIn7d5OXHMgSlIT0ebXI3xBXxBgvK6\nQxZ+DeFKNpIOyY5qIXk/jb77c7Yn1GWwTb8dyKd/+RODiNRbu+7fByurEVvNBFfm\nUd7JbzZWJe6teFiLB29/ms5eTDOrhauQg2MSdoUoCjrYu+fhzWAVtCGqZcijpOxZ\nIZd3w5A/wvRHXPQy3iO+w7GpyhfAb9ELnILjjH968GIYVbnZEG+iXuhssAH1Gi36\nVgv0avT4r3MwZbdN7B7vp3Pn+gnBtD/DvPLBE7sTYQKBgQDrwgAZoYt6yj9prEf1\n81/684dQTzjUJgJyKKZXu32740jLv6a+rnhwgPVNQkIfNm6oT21BbQSlhDyMAggR\n1fSlUIYlzKt4ylJubDZ+D+cpkdtaKT8kfvjnPgJEanrAw8mBlNtAauWXNOGot0my\nhpuUDWC+QD5I/NlwfjHKF7HTYQKBgQDJZZcRu7SDkr7DS1JybM77ZSmPMeXZ/fpL\ntDzUmG7f4k5o+z6M2Bsr8j7gSIML4r0LWFH0TD8Upck6k8RT0wQ/p2zFptEIKvwK\nggFgbnBc/mWHeVmfKq5Vd/92XWoUBVT1dCi5alu8dPehMPG7ZxPxSMMZLnSNYdAU\nZPiwm1XsCQKBgD0TSxdYxFuRHZBws0vCOvE2Oa3SeDRtjGCqqz07Mz2Dig5OnhHz\n/PuYTPQw4BRZ85zixrkWVwfSFCVpOVH1jaVuEPKl7R4ju+sjWZKa6BXa1WqsGNGJ\nm028wLWcqCRcFE3flFVB3Cyp5HPi19LKEG/wb0maNwiNiH8eEiP6s3TBAoGAUDyX\nKUt9KYZHVgsmN8w90k6FdjVM+8KB+7M9IP3x/mRtFMo0K2zVtnZ2smhxPUUCSAjR\n7eCKqTE7sIi6iSLi6HFNlplVYkmtzInq/n5Baes4i/a+y/j3J7n9Hy0sW/mb1YaH\nywcisTxwg9m6FQ2GFnUEtX2aldFIUze/FK1uV/ECgYEAxy/9ICiXA6EjU04vNjsn\nWo7ZUJGepJjkEC1C6OYnq55WyQ/ToXIAYjFHx8QpES4a+IB4lQH8CprJU/s6Dz3Y\nhlV9qII8koM4klY30rKsGoNieuXG6pm5+tB5U3U90jB6EHdtio8ENdz/zDafDYyX\nyQ0hCT5KtCugvTjvSPMGUYw=\n-----END PRIVATE KEY-----\n",
            "client_email": "firebase-adminsdk-xwfe1@backend-8f307.iam.gserviceaccount.com",
            "client_id": "101412377475336763115",
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-xwfe1%40backend-8f307.iam.gserviceaccount.com"
    },
    mongodb: {
        cnxStr: 'mongodb://localhost/ecommerce',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            serverSelectionTimeoutMS: 5000,
        }
    },
    
}


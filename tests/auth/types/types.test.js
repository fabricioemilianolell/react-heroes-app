import { types } from "../../../src/auth/types/types";

describe('pruebas en "Types.js"', () => {

    test('debe de regresar estos typs', () => { 
        expect(types).toEqual({
            login: "[Auth] Login",
            logout: "[Auth] Logout",
        })
     })

 });
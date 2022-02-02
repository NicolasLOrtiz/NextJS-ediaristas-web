export const ValidationService = {
    cep: function (cep = ''): boolean {
        return cep.replace(/\D/g, '').length === 8;
    }
}
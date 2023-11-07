// Convertendo o any
namespace casting {
    let idade: any = 25;
    (idade as number).toFixed(); // Converter para número
    (idade as string).length; // Converter para string
    (idade as string[]).forEach(x => { // Convertendo para Array de string
        console.log(x);
    })

    // Convertendo um número para o tipo string
    let nome: string = 35 as unknown as string;
}
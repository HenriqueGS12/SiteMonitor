import { useContext, useEffect, useState } from "react";
import { Pagina } from "../components/Pagina";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";

export function User() {
    const navigate = useNavigate();
    const { data, adicionarDados, name, adicionarNomes, email, adicionarEmail } = useContext(DataContext);
    const [usuario, setUsuario] = useState([]);
    console.log("Dados do usuário:", data);


    useEffect(() => {
        const myUser = data.filter((item) => item.__tabela === "MYUSER");
        const listaUsuarios = myUser.map((usuario) => ({
            id: usuario.ID,
            nome: usuario.NAME,
            email: usuario.EMAIL,
        }));

        setUsuario(listaUsuarios);
    }, [data]);

    let usuarioEncontrado = usuario.find((user) => {
        return user.email === email
    });
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", email);

    function handleLogout() {
        navigate("/", { replace: true });
    }

    const infoUsuario = {
        nome: "usuarioEncontrado.nome",
        email: "usuarioEncontrado.email",
        instituicao: "Fundação Educere",
        cargo: "Patrão",
        tipoConta: "Administrador",
        ultimoLogin: "22/04/2025 08:30",
    };

    const Box = ({ label, value }) => (
        <div className="bg-fundo_azul_escuro_elegante text-fonte_elegante_amarelo rounded-md p-4 flex flex-col items-center w-full sm:w-1/3 m-2 shadow-md">
            <span className="font-semibold text-lg">{label}</span>
            <span className="text-3xl mt-2">{value}</span>
        </div>
    );

    return (
        <Pagina>
            <div className="flex flex-col items-center justify-start w-full p-4 bg-fundo_azul_claro_elegante min-h-screen text-white">
                <h1 className="text-2xl font-bold text-fonte_elegante_amarelo mb-4">
                    Perfil do Usuário
                </h1>

                <div className="flex flex-wrap justify-center w-full max-w-5xl">
                    <Box label="Nome" value={infoUsuario.nome} />
                    <Box label="E-mail" value={infoUsuario.email} />
                    <Box label="Instituição" value={infoUsuario.instituicao} />
                    <Box label="Cargo" value={infoUsuario.cargo} />
                    <Box label="Tipo de Conta" value={infoUsuario.tipoConta} />
                    <Box label="Último Login" value={infoUsuario.ultimoLogin} />
                </div>

                <div className="mt-8 flex gap-4">
                    <button className="bg-fundo_azul_escuro_elegante text-white px-4 py-2 rounded hover:bg-fonte_elegante_amarelo hover:text-white font-semibold">
                        Editar Perfil
                    </button>
                    <button
                        className="bg-fundo_azul_escuro_elegante text-white px-4 py-2 rounded hover:bg-azul_bebe hover:text-black font-semibold"
                        onClick={handleLogout}
                    >
                        Sair
                    </button>
                </div>
            </div>
        </Pagina>
    );
}

import { useEffect, useState } from "react";
import {
  BodyListTable,
  BoxHeaderContent,
  ButtonBox,
  Button,
  CardBackground,
  HeaderListTable,
  HeaderTableItem,
  TableContent,
} from "../styles/styles-modules";
import ArrowIcon from "../assets/icons/arrow-icon";
import useUsers from "../../services/hooks/use-users";
import LoadingLogo from "./loading-logo";
import Modal from "./modal";
import UserForm from "./form/user-form";
import UserAddIcon from "../assets/icons/user-add-icon";
import { User } from "../../data/types/user";
import formatDate from "../helpers/date-formatter";
import UserEditIcon from "../assets/icons/user-edit-icon";

export const ListTable = () => {
  const { usersData, isLoading } = useUsers();
  const { retorno } = usersData;

  const [orderBy, setOrderBy] = useState("");
  const [sortedUsers, setSortedUsers] = useState(retorno);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [userToEdit, setUserToEdit] = useState<User>();

  const handleEditUser = (user: User) => {
    setUserToEdit(user);
    setOpenEditModal(true);
  };

  const handleOrderBy = (column: string) => {
    if (orderBy === column) {
      setOrderBy("");
      setSortedUsers(retorno);
      return;
    }

    const sorted = [...sortedUsers].sort((a, b) => {
      if (column === "dataNascimento") {
        const dateA = a.dataNascimento.split("/").reverse().join("/");
        const dateB = b.dataNascimento.split("/").reverse().join("/");
        if (dateA > dateB) return 1;
        if (dateB > dateA) return -1;
        return 0;
      } else {
        if (a[column as keyof User] > b[column as keyof User]) return 1;
        if (b[column as keyof User] > a[column as keyof User]) return -1;
        return 0;
      }
    });

    setOrderBy(column);
    setSortedUsers(sorted);
  };

  useEffect(() => {
    setSortedUsers(retorno);
  }, [retorno]);

  if (isLoading) return <LoadingLogo />;

  return (
    <>
      <TableContent size="lg">
        <ButtonBox>
          <Button onClick={() => setOpenCreateModal(true)}>
            <UserAddIcon />
            Adicionar
          </Button>
        </ButtonBox>
        <BoxHeaderContent>
          <HeaderListTable>
            <HeaderTableItem
              onClick={() => handleOrderBy("nome")}
              color={orderBy === "nome" ? "#0099ff" : ""}
            >
              <h1>Nome</h1>
              <ArrowIcon position={orderBy === "nome" ? "down" : "up"} />
            </HeaderTableItem>
            <HeaderTableItem
              onClick={() => handleOrderBy("dataNascimento")}
              color={orderBy === "dataNascimento" ? "#0099ff" : ""}
            >
              <h1>Data de Nascimento</h1>
              <ArrowIcon
                position={orderBy === "dataNascimento" ? "down" : "up"}
              />
            </HeaderTableItem>
            <HeaderTableItem
              onClick={() => handleOrderBy("cpf")}
              color={orderBy === "cpf" ? "#0099ff" : ""}
            >
              <h1>CPF</h1>
              <ArrowIcon position={orderBy === "cpf" ? "down" : "up"} />
            </HeaderTableItem>
            <HeaderTableItem
              onClick={() => handleOrderBy("email")}
              color={orderBy === "email" ? "#0099ff" : ""}
            >
              <h1>E-mail</h1>
              <ArrowIcon position={orderBy === "email" ? "down" : "up"} />
            </HeaderTableItem>
            <HeaderTableItem
              onClick={() => handleOrderBy("telefoneContato")}
              color={orderBy === "telefoneContato" ? "#0099ff" : ""}
            >
              <h1>Telefone</h1>
              <ArrowIcon
                position={orderBy === "telefoneContato" ? "down" : "up"}
              />
            </HeaderTableItem>
            <HeaderTableItem
              onClick={() => handleOrderBy("peso")}
              color={orderBy === "peso" ? "#0099ff" : ""}
            >
              <h1>Peso</h1>
              <ArrowIcon position={orderBy === "peso" ? "down" : "up"} />
            </HeaderTableItem>
          </HeaderListTable>
        </BoxHeaderContent>
        <CardBackground size="lg">
          {sortedUsers?.map((user: User, index: number) => (
            <BodyListTable key={index}>
              <h1>{`${user.nome} ${user.sobrenome}`}</h1>
              <h1>{formatDate(user.dataNascimento)}</h1>
              <h1>{user.cpf}</h1>
              <h1>{user.email}</h1>
              <h1>{user.telefoneContato}</h1>
              <h1>{`${user.peso}kg`}</h1>
              <div className="edit-icon" onClick={() => handleEditUser(user)}>
                <UserEditIcon />
              </div>
            </BodyListTable>
          ))}

          {!sortedUsers?.length && (
            <div
              style={{ display: "flex", height: "300px", alignItems: "center" }}
            >
              <h1 style={{ textAlign: "center" }}>Nenhum usuário encontrado</h1>
            </div>
          )}
        </CardBackground>
      </TableContent>

      <Modal
        isOpen={openCreateModal}
        onClose={() => setOpenCreateModal(false)}
        title="Cadastro"
      >
        <div>
          <UserForm type="CREATE" onClose={() => setOpenCreateModal(false)} />
        </div>
      </Modal>

      <Modal
        isOpen={openEditModal}
        onClose={() => setOpenEditModal(false)}
        title="Edição"
      >
        <div>
          <UserForm
            type="EDIT"
            onClose={() => setOpenEditModal(false)}
            defaultValues={userToEdit}
          />
        </div>
      </Modal>
    </>
  );
};

export default ListTable;

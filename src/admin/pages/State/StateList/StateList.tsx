import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { type State } from "@admin/types/State";
import Button from "@common/components/Form/Button";
import "./index.scss";
import { useServices } from "@admin/contexts/ServiceContext";

export const StateList = () => {
  const navigate = useNavigate();
  
  const { stateService } = useServices();
  
  const [states, setStates] = useState<State[]>([]);

  useEffect(() => {
    stateService.index().then((states) => {
      setStates(states ?? []);
    }).catch((error) => {
      console.error(error.message);
    });
  }, []);

  const onEdit = (state: State) => {
    if (state.id) {
      navigate(`${state.id}/edit`, { state: { id: state.id } });
    }
  };

  const onDelete = (state: State) => {
    if (state.id) {
        stateService.delete(state.id).then(() => {
          setStates(states.filter(c => c.id !== state.id));
        }).catch((error) => {
          console.error(error.message);
        });
    }
  };

  return (
    <>
      <div>
        <table>
          <tbody>
          {states.map((state) => (
            <tr key={state.id}>
              <td>
                <Button onClick={() => onEdit(state)}>Edit</Button>
              </td>
              <td>
                <Button onClick={() => onDelete(state)}>Delete</Button>
              </td>
              <td>
                {state.code}
              </td>
              <td>
                {state.name}
              </td>
              <td>
                {state.active ? "Active" : "Inactive"}
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

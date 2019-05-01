import React, {Component} from 'react';
import Fetch from "./_widgets/Fetch";
import Table from "./_widgets/Table";
import CollapsibleTableBody from "./_widgets/CollapsibleTableBody";

class Sample extends Component {
  render() {
    return (
      <div>
        <Fetch
          url="https://api.github.com/users/xrexonx/repos"
          render={({ data, isLoading }) => (
            <div>
              <h2>xrexonx repos</h2>
              {isLoading && <h2>Loading...</h2>}
              <ul>
                {data.length > 0 && data.map(repo => (
                  <li key={repo.id}>
                    {repo.full_name}
                  </li>
                ))}
              </ul>
            </div>
          )} />
        <Table>
          <CollapsibleTableBody>
            {(collapsed, toggleCollapse) => {
              if (collapsed) {
                return (
                  <tr>
                    <td>
                      <button onClick={toggleCollapse}>Open</button>
                    </td>
                  </tr>
                );
              } else {
                return (
                  <tr>
                    <td>
                      <button onClick={toggleCollapse}>Closed</button>
                    </td>
                    <td>CollapsedContent</td>
                  </tr>
                );
              }
            }}
          </CollapsibleTableBody>
        </Table>
      </div>
    );
  }
}

export default Sample;
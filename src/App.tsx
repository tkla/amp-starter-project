import { AmpersandProvider, InstallIntegration } from '@amp-labs/react'
// import '@amp-labs/react/styles';

// You can customize the component's styles here
// See https://docs.withampersand.com/embeddable-ui-components#customize-styles
import './App.css';

const options = {
  project: 'tkla-demo', // Replace with your Ampersand project name or ID.
  apiKey: "Demo Key", // Replace with your Ampersand API key, create one in the Ampersand dashboard.
};

function App() {

  // This must match the integration name in integrations/amp.yaml
  const integration = "readAndWriteJira";

  // You can learn more about the parameters in
  // https://docs.withampersand.com/embeddable-ui-components#install-integration
  return (
    <AmpersandProvider options = {options}>
      <p>Hello World?</p>
      <InstallIntegration 
        integration = {integration}
        consumerName = "demo-user-name"
        consumerRef = "demo-user-id"
        groupName = "demo-company-name"
        groupRef = "demo-company-id"
      />
    </AmpersandProvider>
  )
}

export default App

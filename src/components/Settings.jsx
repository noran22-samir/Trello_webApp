const WorkspaceSettings = () => {
  
  const containerStyle = {
    maxWidth: '1000px',
    margin: '40px auto',
    padding: '20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    color: '#172b4d'
  };

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '30px'
  };

  const avatarStyle = {
    width: '45px',
    height: '45px',
    backgroundColor: '#d95d00',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '3px',
    fontSize: '24px',
    fontWeight: 'bold'
  };

  const sectionHeaderStyle = {
    fontSize: '12px',
    fontWeight: '700',
    color: '#5e6c84',
    textTransform: 'uppercase',
    marginBottom: '10px',
    marginTop: '30px'
  };

  const rowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 0',
    borderBottom: '1px solid #ebecf0'
  };

  const premiumBoxStyle = {
    backgroundColor: '#f9f4ff', 
    border: '1px solid #eae6ff',
    borderRadius: '3px',
    padding: '20px',
    marginTop: '20px'
  };

  const buttonStyle = {
    backgroundColor: '#f4f5f7',
    border: 'none',
    padding: '6px 12px',
    borderRadius: '3px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    color: '#172b4d'
  };

  const upgradeButtonStyle = {
    backgroundColor: '#0052cc',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '3px',
    fontWeight: 'bold',
    cursor: 'pointer'
  };

  const disabledRowStyle = {
    ...rowStyle,
    opacity: 0.6, 
    borderBottom: '1px solid #eae6ff'
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ fontSize: '14px', borderBottom: '1px solid #eee', paddingBottom: '10px', color: '#5e6c84' }}>
        Workspace settings
      </h2>

      <div style={headerStyle}>
        <div style={avatarStyle}>N</div>
        <div>
          <h1 style={{ fontSize: '20px', margin: 0, fontWeight: '600' }}>
            User Workspace <span style={{ fontSize: '14px', cursor: 'pointer', color: '#6b778c' }}>✏️</span>
          </h1>
          <p style={{ fontSize: '12px', margin: '4px 0 0 0', color: '#6b778c' }}>🔒 Private</p>
        </div>
      </div>

      <div style={sectionHeaderStyle}>Workspace visibility</div>
      <div style={rowStyle}>
        <div style={{ fontSize: '14px' }}>
          <span style={{ color: '#ae2e24', fontWeight: 'bold' }}>🔒 Private</span> – This Workspace is private. It's not indexed or visible to those outside the Workspace.
        </div>
        <button style={buttonStyle}>Change</button>
      </div>

     
      <div style={sectionHeaderStyle}>Slack workspaces linking</div>
      <div style={rowStyle}>
        <p style={{ fontSize: '14px', margin: 0 }}>
          Link your Slack and Trello Workspaces together to collaborate on Trello projects from within Slack.
        </p>
        <button style={buttonStyle}>Add to Slack</button>
      </div>

  
      <div style={premiumBoxStyle}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{ color: '#403294', fontWeight: '600', fontSize: '14px' }}>
            ✨ Upgrade to Premium for more settings
          </div>
          <button style={upgradeButtonStyle}>Upgrade</button>
        </div>

      
        <div style={disabledRowStyle}>
          <div>
            <div style={{ fontWeight: 'bold', fontSize: '14px', color: '#403294' }}>Workspace membership restrictions 🔒</div>
            <div style={{ fontSize: '13px' }}>Anyone can be added to this Workspace.</div>
          </div>
          <button style={{ ...buttonStyle, backgroundColor: 'transparent', color: '#a5adba' }}>Change</button>
        </div>

        <div style={disabledRowStyle}>
          <div>
            <div style={{ fontWeight: 'bold', fontSize: '14px', color: '#403294' }}>Board creation restrictions 🔒</div>
            <div style={{ fontSize: '13px' }}>Any Workspace member can create public, workspace visible, and private boards.</div>
          </div>
          <button style={{ ...buttonStyle, backgroundColor: 'transparent', color: '#a5adba' }}>Change</button>
        </div>

        <div style={disabledRowStyle}>
          <div>
            <div style={{ fontWeight: 'bold', fontSize: '14px', color: '#403294' }}>Board deletion restrictions 🔒</div>
            <div style={{ fontSize: '13px' }}>Any Workspace member can delete public, workspace visible, and private boards.</div>
          </div>
          <button style={{ ...buttonStyle, backgroundColor: 'transparent', color: '#a5adba' }}>Change</button>
        </div>
      </div>

   
      <div style={{ marginTop: '30px' }}>
        <a href="#" style={{ color: '#ae2e24', fontSize: '14px', textDecoration: 'underline' }}>
          Delete this Workspace?
        </a>
      </div>
    </div>
  );
};

export default WorkspaceSettings;
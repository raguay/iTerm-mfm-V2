var iterm = {
  extMan: null,
  init: function(extManager) {
    //
    // This function adds all the commands for working with iterm and 
    // setting up references to variables that are used.
    //
    iterm.extMan = extManager;
    iterm.extMan.getCommands().addCommand('Open Directory in iTerm', 'iterm.open', 'Open the directory in iTerm.', iterm.open);
  },
  installKeyMaps: function() {
    iterm.extMan.getExtCommand('addKeyboardShort').command('normal', false, false, false, 'o', iterm.open);
  },
  open: async function() {
    //
    // First, get the current cursor:
    //
    var cursor = iterm.extMan.getExtCommand('getCursor').command();
    var extScript = `${iterm.extMan.getExtensionDir()}/iTerm-ModalFileManagerExtension-V2/iterm.scpt`;

    //
    // Use AppleScript command line to open the cursor in iterm.
    //
    await iterm.extMan.getLocalFS().runCommandLine(`osascript "${extScript}" "${cursor.entry.dir}"`);
  }
};
return (iterm);


on run argv	
  set onlywindow to false	
  tell application "iTerm"		
    activate		
    try			
      select first window			
      set onlywindow to true		
    on error			
      create window with default profile			
      select first window			
      set onlywindow to true		
    end try		
    tell the first window			
      if onlywindow is false then				
        create tab with default profile			
      end if
      set t to (my findReplace((item 1 of argv), " ", "\\ "))
      set t to (my findReplace(t, "(", "\\("))
      set t to (my findReplace(t, ")", "\\)"))
      tell current session to write text t 
    end tell	
  end tell
end run

on findReplace(t, toFind, toReplace)
	set {tid, text item delimiters} to {text item delimiters, toFind}
	set t to text items of t
	set text item delimiters to toReplace
	set t to t as text
	set text item delimiters to tid
	return t
end findReplace

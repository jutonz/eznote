module NotesHelper
  def left_notes
    current_user.notes[0..4] || []
  end

  def right_notes
    current_user.notes[5..9] || []
  end
end

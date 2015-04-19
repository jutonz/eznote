module NotesHelper
  def left_notes
    notes = current_user.notes[0..4] || []
    fill_empty notes
  end

  def right_notes
    notes = current_user.notes[5..9] || []
    fill_empty notes
  end

  def fill_empty(notes)
    diff = 5 - notes.size
    diff.times do
      notes.push nil
    end
    return notes
  end
end

class NotesController < ApplicationController
  before_action :set_note, only: [:show, :edit, :update, :destroy]
  before_action :set_user

  # GET /notes
  # GET /notes.json
  def index
    redirect_to login_path unless current_user.logged_in?
    @notes = current_user.notes
    # @favorites = current_user.notes.find_by favorite: true
  end

  def index_favorites
    @favorites = current_user.notes.where favorite: true
  end

  # GET /notes/1
  # GET /notes/1.json
  def show
    @notes = Note.find_by user_id: current_user.id
  end

  # GET /notes/new
  def new
    @note = current_user.notes.build
  end

  # GET /notes/1/edit
  def edit
    @current_user = current_user
  end

  # POST /notes
  # POST /notes.json
  def create
    @note = current_user.notes.build note_params

    respond_to do |format|
      if @note.save
        format.html { redirect_to root_url, notice: 'Note was successfully created.' }
        format.json { render :show, status: :created, location: @note }
      else
        format.html { render :new }
        format.json { render json: @note.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /notes/1
  # PATCH/PUT /notes/1.json
  def update
    respond_to do |format|
      if @note.update(note_params)
        format.html { redirect_to root_url, notice: 'Note was successfully updated.' }
        format.json { render :show, status: :ok, location: @note }
      else
        format.html { render :edit }
        format.json { render json: @note.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /notes/1
  # DELETE /notes/1.json
  def destroy
    @note.destroy
    respond_to do |format|
      format.html { redirect_to root_url, notice: 'Note was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_note
      @note = Note.find(params[:id])
    end

    def set_user
      @current_user = current_user
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def note_params
      params.require(:note).permit(:text, :favorite)
    end
end

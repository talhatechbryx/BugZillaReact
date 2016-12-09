class ProjectsController < ApplicationController
  before_action :authenticate_user!

  def index
  end

  def create
    project = Project.new(project_params)
    if project.save
      render json: project
    else
      render json: project.errors, status: :unprocessable_entity
    end
  end

  def show
    #binding.pry
  end

  private
    def project_params
      params.require(:project).permit(:title, :desc, :avatar)
    end

end

class OffersController < ApplicationController
  before_action :authenticate_user!
  before_action :set_offer, only: %i[ show edit update destroy ]
  # respond_to :json, :html

  def index
    # raise
    @offers = current_user.offers.order(id: :desc)
    # @date_since = Date.today - current_user.send_date

    if params[:query].present?
      sql_query = <<~SQL
        offers.job_title ILIKE :query
        OR offers.company_name ILIKE :query
        OR offers.job_location ILIKE :query
      SQL
      @offers = @offers.where(sql_query, query: "%#{params[:query]}%")
    end

    respond_to do |format|
      format.html
      format.text { render partial: 'list', :formats=>[:html], locals: { offers: @offers } }
    end
  end

  def show
    respond_to do |format|
      format.html
      format.text { redirect_to offers_path, :formats=>[:html] }
    end
  end

  def new
    @offer = Offer.new
  end

  def create
    @offer = current_user.offers.build(offer_params)

    if @offer.save
      redirect_to offers_path, notice: 'Offer was successfully created.'
    else
      render "new", status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
    @offer.update(offer_params)
    if @offer.save
      redirect_to offers_path, notice: 'Offer was successfully updated.'
    else
      render "edit", status: :unprocessable_entity
    end
  end

  def destroy
    @offer.destroy
    redirect_to offer_path, notice: 'Offer was successfully destroyed.'
  end

  private

  def offer_params
    params.require(:offer).permit(:job_title, :company_name, :job_location, :company_info, :send_date, :application_letter, :cv, :archived)
  end

  def set_offer
    @offer = Offer.find(params[:id])
  end
end

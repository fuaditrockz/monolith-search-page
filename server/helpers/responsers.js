exports.GET_RESPONSE = {
  success: (isSingleItem, payloadName, payload) => {
    return {
      error: false,
      statusCode: 200,
      message: `Success GET ${isSingleItem ? '' : 'all'} ${payloadName}`,
      total: isSingleItem ? 1 : payload.length,
      data: payload
    }
  },
  error: err => {
    return {
      error: true,
      statusCode: 404,
      message: err
    }
  }
}

exports.POST_RESPONSE = {
  success: (payload) => {
    return {
      error: false,
      statusCode: 201,
      message: `${payload.name} was created successfully`,
      objectId: payload._id
    }
  },
  error: err => {
    return {
      error: true,
      statusCode: 400,
      message: err
    }
  }
}
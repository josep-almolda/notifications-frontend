
export const fetchWrapper = async requestToAPI => {
  try {
    const response = await requestToAPI()
    const text = await response.text()
    const content =
      text && text !== '' ? JSON.parse(text) : ''

    if (response.status === 401) {
      throw new Error('You are not authorized to make this request')
    } else if (!response.ok) {
      const err = new Error(content.message)
      err.response = {
        ...response,
        data: content
      }
      throw err
    }

    return { ...response, ok: true, data: content }
  } catch (err) {
    return { ...(err.response || {}), err, ok: false }
  }
}

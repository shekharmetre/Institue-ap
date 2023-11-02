import React from 'react'

const Screen = () => {
  return (
    <div>Screen</div>
  )
}

export default Screen
// import React, { useCallback, useEffect, useState } from "react";
// import { useSocket } from "../../utils/context/SocketProvider";
// import ReactPlayer from "react-player";
// import Peet from "../service/Peet";
// const mystream = await navigator.mediaDevices.getUserMedia({
//   audio: true,
//   video: true,
// });
// const Screen = () => {
//   const [socketid, setRemotesocketid] = useState("");
//   const socket = useSocket();
//   const [stream, setStream] = useState();
//   const [remoteStream, setRemoteStream] = useState();
//   const handleCallUser = useCallback(async () => {
//     const offer = await Peet.getOffer();
//     socket.emit("user:call", { to: socketid, offer });
//     setStream(mystream);
//   }, [socketid, socket]);

//   const handleJoinuser = useCallback(
//     (data) => {
//       const { id, email } = data;
//       setRemotesocketid(id);
//     },
//     [socket]
//   );

//   const handleIncomingCall = useCallback(
//     async (data) => {
//       const { from, offer } = data;
//       setRemotesocketid(from);
//       console.log(from, offer);
//       setStream(mystream);
//       const ans = await Peet.getAnswer(offer);
//       socket.emit("call:accepted", { to: from, ans });
//     },
//     [socket]
//   );
//   console.log(socketid);

//   const handleCallAccepted = useCallback(
//     async ({ from, ans }) => {
//       console.log("call accepted");
//       Peet.setLocalDescription(ans);
//       for (const track of mystream.getTracks()) {
//         Peet.peer.addTrack(track, mystream);
//       }
//     },
//     [socket]
//   );

//   useEffect(() => {
//     Peet.peer.addEventListener('track',async ev=>{
// 		setRemoteStream(ev.streams)
// 	})
	
//   }, []);

//   const handleNegotions = useCallback(async ()=>{
// 	const offer = await Peet.getOffer();
// 	socket.emit('nogotions',{offer,to:socketid})
//   },[])

//   useEffect(()=>{
// 	Peet.peer.addEventListener('negotiationneeded',handleNegotions)
// 	return () => {
// 		Peet.peer.removeEventListener('negotiationneeded',handleNegotions)
// 	}
//   },[handleNegotions])

//   const Incomingnegotions = useCallback(async ({from,offer})=>{
// 		const ans = Peet.getAnswer(offer);
// 		socket.emit('negotions:done',{to:from,ans})
//   },[socket])

//   const handleFinal = useCallback(async ({ans})=>{
// 	await Peet.setLocalDescription(ans)
//   },[socket])

//   useEffect(() => {
//     socket.on("user:join", handleJoinuser);
//     socket.on("incoming:call", handleIncomingCall);
//     socket.on("call:accepted", handleCallAccepted);
// 	socket.on('nogotions',Incomingnegotions)
// 	socket.on('negotions:final',handleFinal)
//     return () => {
//       socket.off("user:join", handleJoinuser);
//       socket.off("incoming:call", handleIncomingCall);
//       socket.off("call:accepted", handleCallAccepted);
// 	  socket.off("nogotions", Incomingnegotions);
// 	  socket.off("negotions:final", handleFinal);
//     };
//   }, [socket,handleJoinuser,handleIncomingCall,handleCallAccepted,Incomingnegotions,handleFinal]);

//   const sendStream = ()=>{

//   }

//   return (
//     <div>
//       <h1>Room</h1>
//       <p>{socketid ? "user COnnected" : "NO one connected"}</p>
// 	  <p>{stream && ( <button className="btn btn-primary" onClick={sendStream}>Send Stream</button> )}</p>
//       {socketid && (
//         <button className="btn" onClick={handleCallUser}>
//           Call
//         </button>
//       )}
//       {stream && (
//         <>
//           <h1>My Stream</h1>
//           <ReactPlayer
//             url={stream}
//             width={200}
//             height={100}
//             playing={true}
//             muted
//           />
//         </>
//       )}

//       {remoteStream && (
//         <>
//           <h1>User stream</h1>
//           <ReactPlayer
//             url={remoteStream}
//             width={200}
//             height={100}
//             playing={true}
//             muted
//           />
//         </>
//       )}
//     </div>
//   );
// };

// export default Screen;
